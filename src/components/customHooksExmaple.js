export const useLocalStorage = (key, initValue) => {

    const [value, setValue] = useState(() => {
        const json = localStorage.getItem(key);
        return json ? JSON.parse(json) : initValue;
    });

    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return [value, setLocalStorage];

}

export const useForm = (init) => {
    const [values, setValues] = useState(init);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    return [values, handleInputChange];
}


export const useFormWithLocalStorage = (key, init) => {
    const [values, setValues] = useLocalStorage(key, init);
    const [form, handleInputChange] = useForm(values);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues(form);
    }

    return [form, handleInputChange, handleSubmit];
}

export const useAuth = () => {
    const [token, setToken] = useLocalStorage('token', null);
    const [user, setUser] = useLocalStorage('user', null);

    const login = (token, user) => {
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        setToken(null);
        setUser(null);
    }

    return {
        token,
        user,
        login,
        logout
    }
}

export const useAuthWithLocalStorage = () => {
    const auth = useAuth();
    const [form, handleInputChange, handleSubmit] = useFormWithLocalStorage('auth', {});

    const handleSubmitAuth = (event) => {
        event.preventDefault();
        handleSubmit(event);
        auth.login(form.token, form.user);
    }

    return [form, handleInputChange, handleSubmitAuth];
}

const useCallApi = (baseUrl) => {
    const auth = useAuth();

    const callApi = async (endpoint, method = 'GET', body = null) => {
        const url = `${baseUrl}/${endpoint}`;
        const headers = {};

        if (auth.token) {
            headers['Authorization'] = `Bearer ${auth.token}`;
        }

        const response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }

    return callApi;
}

export const useCallApiWithLocalStorage = (baseUrl) => {
    const callApi = useCallApi(baseUrl);

    const callApiWithLocalStorage = async (endpoint, method = 'GET', body = null) => {
        const response = await callApi(endpoint, method, body);
        return response;
    }

    return callApiWithLocalStorage;
}

export const useFetch = (baseUrl) => {
    const callApi = useCallApi(baseUrl);

    const fetch = async (endpoint, method = 'GET', body = null) => {
        const response = await callApi(endpoint, method, body);
        return response;
    }

    return fetch;
}

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export const usePreviousWithLocalStorage = (key, init) => {
    const [value, setValue] = useLocalStorage(key, init);
    const prev = usePrevious(value);
    return [prev, setValue];
}
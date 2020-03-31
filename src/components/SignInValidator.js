import { string, object } from 'yup'; 

let signInSchema = yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string().required()
});


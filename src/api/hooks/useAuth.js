import { useFetch } from "../../hooks/useFetch"

export const useAuth = () => {

    const { isLoading, commonFetch } = useFetch({url: '/public-api'})


    const login = ({email,password}) => {
        return commonFetch({uri: '/login', method: 'POST', body: {email,password}})
    }

    const changePassword = ({email,oldPassword,newPassword}) => {
        return commonFetch({uri: '/change_password', method: 'POST', body: {email,oldPassword,newPassword}})
    }

    return {login, changePassword, isLoading}
}
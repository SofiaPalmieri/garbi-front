import { useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"

export const useGetContainers = () => {
    const { isLoading, commonFetch } = useFetch({ url: '/api/container' })

    const getContainers = () => {
        return commonFetch({ method: 'GET' })
    }

    return {
        getContainers,
        isLoadingGetContainers: isLoading
    }
}
import React from 'react';
import { FilterSideComponent } from '../../components/FilterSideComponent';
import { ContainerContent } from './ContainerContent';




export const ContainerPage = () => {
    return (
        <FilterSideComponent
            title={"Gestión > Contenedores"}
            component={() => <ContainerContent />}
        />

    )
}

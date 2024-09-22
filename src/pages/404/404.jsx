import BaseWithHeader from '../../common/baseWithHeader';
import errorImage from '../../assets/error.png'; // Ajusta la ruta según tu estructura

export const ErrorPage = () => {
  return (
    <BaseWithHeader
      logoOnly={true}
    >

      <img 
        src={errorImage} 
        alt='Error' 
        style={{
          maxWidth: '100%', // Asegura que la imagen no exceda el ancho del contenedor
          height: 'auto', // Mantiene la proporción de la imagen
        }} 
      />
    </BaseWithHeader>
  );
};

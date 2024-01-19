    export const modal=(msg,imc,img) => {
    
        Swal.fire({
            title: msg,
            text: `IMC: ${imc}`,
            imageUrl: `images/${img}`,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
        
    }
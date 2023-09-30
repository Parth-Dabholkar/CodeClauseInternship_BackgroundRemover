let imageURL;
const form = document.querySelector('.former')

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("click");
        const fileInput = document.getElementById('up');
        console.dir(fileInput)
        const image = fileInput.files[0];

        const formData = new FormData();
        formData.append('image_file', image);
        formData.append('size', 'auto');

        const apiKey = '2zVX2tH4ZQrh3wzKZRJgtvcz';

        fetch('https://api.remove.bg/v1.0/removebg',{
            method:'POST',
            headers: {
            'X-Api-Key': apiKey
         },
         body: formData
        })
        .then(function(reponse){
                return reponse.blob()
        })
        .then(function(blob){
                console.log(blob);
                const url = URL.createObjectURL(blob);
                imageURL = url;
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
        })
        .catch();
    })

   function handleDownload(){
        let anchorElement = document.createElement('a'); //<a></a>
        anchorElement.href = imageURL;
        anchorElement.download = 'removal.png';
        document.body.appendChild(anchorElement);

        anchorElement.click();

        document.body.removeChild(anchorElement);
   }
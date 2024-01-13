
let imageArray = [];

function browseAndStore() {
    let passCode = prompt('Enter Pass code');
    if(passCode == 12345){
        const input = document.getElementById('imageInput');
        const savebtn = document.getElementById('savebtn');

        input.style.display = 'block';
        input.style.display = 'block';
      
        input.addEventListener('change', function () {
          const files = input.files;
      
          console.log(files)
          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
      
            reader.onload = function (e) {
              const imageDataUrl = e.target.result;
              imageArray.push(imageDataUrl);
            };
      
            reader.readAsDataURL(files[i]);
          }
        });     
    }else {
        alert('Wrong Pass Code!')
    }
}

function saveImagesLocally() {
  localStorage.setItem('imageArray', JSON.stringify(imageArray));
}

function displayImages() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  imageArray.forEach(function (imageDataUrl) {
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.style.Width = '200px';
    img.style.height = '200px' // Set a maximum width for display purposes
    img.style.marginRight = '5px'; // Add some spacing between images
    imageContainer.appendChild(img);
  });


  saveImagesLocally();
}
function checkAge() {

    var age = document.getElementById('ageInput').value;
    var resultElement = document.getElementById('result');
    var AdultImage = document.getElementById('AdultImage');
    var ChildImage = document.getElementById('ChildImage');
    

    resultElement.style.color='Blue'
    resultElement.style.margin='20px'
    resultElement.style.fontSize='40px'
    resultElement.style.fontWeight='700'
  
    document.getElementById('ageInput').value=""
  

    if (age >= 18) {
        resultElement.textContent = 'You are an Adult';
        AdultImage.src="./young-1.jpg"
        AdultImage.style.display='block'
        ChildImage.style.display='none'
    } else {
        resultElement.textContent = 'You are a Child';
        ChildImage.src='./child-2.jpg'
        ChildImage.style.display='block'
        AdultImage.style.display='none'
    }
   
    
  
}
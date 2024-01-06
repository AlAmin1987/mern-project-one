function checkAge() {

    var age = document.getElementById('ageInput').value;
    var resultElement = document.getElementById('result');
    var AdultImage = document.getElementById('AdultImage');
    var ChildImage = document.getElementById('ChildImage');
    

    resultElement.style.color='red'
    resultElement.style.margin='20px'
    resultElement.style.fontSize='40px'
    resultElement.style.fontWeight='700'
  
    document.getElementById('ageInput').value=""
  

    if (age >= 18) {
        resultElement.textContent = 'Adult';
        AdultImage.src="./young-1.jpg"
        AdultImage.style.display='block'
        ChildImage.style.display='none'
    } else {
        resultElement.textContent = 'Child';
        ChildImage.src='./child-2.jpg'
        ChildImage.style.display='block'
        AdultImage.style.display='none'
    }
   
    
  
}
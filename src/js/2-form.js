
const form = document.querySelector('.feedback-form'); 
const LOCAL_STORAGE_KEY = 'feedback-form-state'; 
let formData = { email: '', message: '' }; 


function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}


function loadFromLocalStorage() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY); 
  if (savedData) {
    formData = JSON.parse(savedData); // Парсимо дані
    form.elements.email.value = formData.email; // Встановлюємо значення в поле email
    form.elements.message.value = formData.message; // Встановлюємо значення в поле message
  }
}


form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  saveToLocalStorage(); 
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Перевірка заповнення полів
  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return;
  }

  
  console.log('Submitted data:', formData);

  
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});


loadFromLocalStorage();
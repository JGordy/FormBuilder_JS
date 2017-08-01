// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
// let container = document.getElementById("fields");
// let input = document.createElement("input");
//
// input.setAttribute("type", "text");
// input.setAttribute("placeholder", "First Name");
// input.setAttribute("id", "user-first-name");
//
// container.appendChild(input);
  let container = document.getElementById("fields");

for (var i = 0; i < formData.length; i++) {

  let input = document.createElement("input");

  if (formData[i].type === "textarea") {

let textArea =document.createElement("textarea");

      textArea.setAttribute("placeholder", formData[i].label);
      textArea.setAttribute("value", "Select Language...")

      container.appendChild(textArea);


} else if (formData[i].options.length <= 0 ) {

   input.setAttribute("type", formData[i].type);
   input.setAttribute("placeholder",  formData[i].label);
   input.setAttribute("id", formData[i].id);

   container.appendChild(input);

} else {

  let select = document.createElement("select");
  let optionOne = document.createElement("option");
  optionOne.textContent = "Select Language...";
  select.appendChild(optionOne);

    for (var j = 0; j < formData[i].options.length; j++) {

      let option = document.createElement("option");

      option.textContent = formData[i].options[j].label;

      select.setAttribute("type", formData[i].type);
      select.setAttribute("label", formData[i].label);
      select.setAttribute("id", formData[i].id);

      select.appendChild(option);
      container.appendChild(select);


    }
  }
}














//

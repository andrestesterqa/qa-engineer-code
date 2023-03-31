//01- Using multiple assertions

pm.test("The response has all properties", () => {
    //parse the response JSON and test three properties
    const jsonData = pm.response.json();
    pm.expect(jsonData.type).to.eql('vip');
    pm.expect(jsonData.name).to.be.a('string');
    pm.expect(jsonData.id).to.have.lengthOf(1);
});

//----------------------------------------------------------------//

// Model data

/*data[
    {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}
]*/

//02- With the "find" method, we can find the first element in the array that matches the criteria
var jsonData = pm.response.json();
pm.test("Name of the test", function() {
    var user = jsonData.data.find(x => x.id == 7)
    pm.expect(user.email).to.eq("byron.fields@reqres.in")
    pm.expect(user.avatar).contain("7-image.jpg")

    console.log(user)
})

//----------------------------------------------------------------//

/* response has this structure:
{
  "name": "Jane",
  "age": 29,
  "hobbies": [
    "skating",
    "painting"
  ],
  "email": null
}
*/

//03- Asserting a value type - Test the type of any part of the response:
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
    pm.expect(jsonData).to.be.an("object");
    pm.expect(jsonData.name).to.be.a("string");
    pm.expect(jsonData.age).to.be.a("number");
    pm.expect(jsonData.hobbies).to.be.an("array");
    pm.expect(jsonData.website).to.be.undefined;
    pm.expect(jsonData.email).to.be.null;
});

//----------------------------------------------------------------//

/*
response has this structure:
{
  "errors": [],
  "areas": [ "goods", "services" ],
  "settings": [
    {
      "type": "notification",
      "detail": [ "email", "sms" ]
    },
    {
      "type": "visual",
      "detail": [ "light", "large" ]
    }
  ]
}
*/

//04- Asserting array properties - Check if an array is empty, and if it contains particular items:
const jsonData = pm.response.json();
pm.test("Test array properties", () => {
    //errors array is empty
    pm.expect(jsonData.errors).to.be.empty;
    //areas includes "goods"
    pm.expect(jsonData.areas).to.include("goods");
    //get the notification settings object
    const notificationSettings = jsonData.settings.find(m => m.type === "notification");
    pm.expect(notificationSettings)
        .to.be.an("object", "Could not find the setting");
    //detail array should include "sms"
    pm.expect(notificationSettings.detail).to.include("sms");
    //detail array should include all listed
    pm.expect(notificationSettings.detail)
        .to.have.members(["email", "sms"]);
});
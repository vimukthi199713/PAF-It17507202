$("#buyer_registration_form").submit(function (event) {
    event.preventDefault();


           
            data = {
			
				"name": $("#registration_inputUsername").val(),
                "contactNo": $("#registration_inputContactnumber").val(),
                "inquiry": $("#registration_inputEmail").val(),
            }
            
            $.ajax("http://localhost:8080/sellnbye/api/inquiry", {
                data: JSON.stringify(data),
                contentType: 'application/json',
                type: 'POST'
            }).done(function (response) {
                if (response === true) {
                    location.reload();
                    alert("Inquiry Submitted successfully");
                }
                else {
                    alert("Adding inquiry failed");
                }
            });
        
    
});
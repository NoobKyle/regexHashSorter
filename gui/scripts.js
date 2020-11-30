
// Clear textarea
function clearTextAreas(){
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
    console.log('Cleared');
}

// Search for 64 digit hex strings.
function searchHashes(){
    var input = document.getElementById("input").value;
    var regex = /([a-zA-Z0-9])\w{63}/g;

    var output = input.match(regex);
    document.getElementById('output').value = output;
}

// Add new lines between hashes.
function sortHashes(){
    var input = document.getElementById("input").value;
    var regex = /([a-zA-Z0-9])\w{63}/g;

    document.getElementById("output").value = '';

    var output = input.match(regex);

    for(let i = 0; output.length > i; i++){
        console.log(output[i]);

        let result = document.getElementById('output').value + output[i] + '\n';
        document.getElementById('output').value = result;
    }
}

// Add formating to the lines.
function addFormating(){
    var input = document.getElementById("input").value;
    var regex = /([a-zA-Z0-9])\w{63}/g;

    document.getElementById("output").value = '';

    var output = input.match(regex);

    for(let i = 0; output.length > i; i++){
        console.log(output[i]);

        let result = document.getElementById('output').value + "sha256='" + output[i] + "'"+ '\n';
        document.getElementById('output').value = result;
    }
}

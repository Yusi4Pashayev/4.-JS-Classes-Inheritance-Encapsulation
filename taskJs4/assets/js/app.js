// find string and count of their

function str(a) {

    if (typeof (a) === 'string') {
        for (var i = 0; i < a.length; i++) {
            for (var j = i + 1; j < a.length; j++) {
                if (a.charAt(i) == a.charAt(j)) {
                    console.log(a.charAt(j));
                }
            }
        }
    }
    else {
            console.log("string daxil edin");
        }
    
}

str("kenan");

//Find minimum element of array.

function FindMin(array) {
    if (Array.isArray(array)) {
        var minimum = array[0];

        for (var i = 1; i < array.length; ++i) {
            if (minimum > array[i]) {
                minimum = array[i]
            }
        }
        console.log(minimum);
    }
    else {
        console.log('Array daxil edin');
    }

}
var array = [5, 4, 7, 5, 9, 11];
FindMin(array);


// Find Palindrome word.


function FindPalindrome(a) {
    var b = "";

    for (var i = a.length; i >= 0; --i) {
        b += a.charAt(i);
    }

    if (b === a) {
        console.log('Bu söz Palindromdur');
    }
    else {
        console.log('Bu söz Palindrom deyil')
    }

}

var str = "salam";
FindPalindrome(str);

var str1 = "TENET";
FindPalindrome(str1);


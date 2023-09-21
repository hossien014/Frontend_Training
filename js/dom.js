
        function scrollDowin() {

            scrollBy(
                {
                    top: 300,
                    behavior: 'smooth'
                }
            );
        }

        function realod() {

            window.location.reload();
        }

        onscroll = function () { console.log("hi"); }
        onclick = function () { console.log("click"); }
        function addNewP() {


            let myElement = document.createElement('p');
            let myTextNode = document.createTextNode('این المینت توسط جاوا اسکریپ جای گذاری شده است');
            let myAttrobute = document.createAttribute('style');
            myAttrobute.value = 'color:red';
            myElement.setAttributeNode(myAttrobute);
            myElement.append(myTextNode);
            document.body.appendChild(myElement);
        }
/* exported addTo */
const addTo = {
    //init method for initializing the component
    //1.passed data or callback functions
    //2.setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

        //below is different way to wtite this
        //form.onsubmit = function() {};

        //this is the "standard" way to add event listeners in JS
        form.addEventListener('submit', function(event) {
            //prevent form from reloading page
            event.preventDefault();

            //form elements
            const elements = form.elements;
            //get values from the form controls
            const list = {
                name: elements.name.value,
                due: elements.due.value,
            };
            onAdd(list);

            form.reset();
            document.activeElement.blur();
        });
    }
};
export default addTo;
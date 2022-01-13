export default function CarForm(){
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);
        const response =await fetch('/api/cars',{
            body: JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json',
            },
            method:'POST',
        });
        const result = await response.json();
        console.log(result);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="brand" type="text" /> 
            {/* Make sure the names of inputs match the schema names since we are using FormData in handleSubmit */}
            <input name="model" type="text" />
            <input name="image" type="text" />
            <input name="price" type="text" />
            <textarea name="description" type="text" />
            <button type="submit"> Create Car</button>
        </form>
    );
}
import useSelectClass from "../../../../hooks/useSelectClass";


const MySelectedClass = () => {
    const [selectedClass] =useSelectClass()
    return (
        <div>
            <h2>This is my selected class: {selectedClass.length}</h2>
        </div>
    );
};

export default MySelectedClass;
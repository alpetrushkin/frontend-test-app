interface IGreeting {
    name: string
}

const Greeting = ({name}: IGreeting) => {

    return (
        <h3>Hi {name}</h3>
    );
};

export default Greeting;
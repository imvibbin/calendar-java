const UserRegistration = () => {
    const userInitial = {
      id: 0,
      username: "",
      password: "",
      rol: 0,
    };
  
    const [user, setUser] = useState<UserInterface>(userInitial);
  
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
      createUser(user);
    };
  
    return (
      <>

    <div className="container-fluid text-center mb-1 mt-1 text-light">
        <div className="row mb-1 mx-1">
            <div style={{background-color: blue}} className="col-4 border border-white">
                col 4
            </div>
            <div style={{background-color: blue}} className="col-4 border border-white">
                col 4
            </div>
            <div style={{background-color: blue}} className="col-4 border border-white">
                col 4
            </div>
        </div>
      </>
    );
  };
  
  export default UserRegistration;
  
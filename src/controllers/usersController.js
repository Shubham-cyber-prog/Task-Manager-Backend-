class UsersController {
    constructor() {
        this.users = []; 


        
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    signup(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const existingUser = this.users.find(u => u.username === username);
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const newUser = { id: Date.now(), username, password };
        this.users.push(newUser);

        res.status(201).json({ message: "User registered successfully", user: newUser });
    }

    login(req, res) {
        const { username, password } = req.body;

        const user = this.users.find(u => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user });
    }

    logout(req, res) {
        res.status(200).json({ message: "Logout successful" });
    }
}

module.exports = UsersController;

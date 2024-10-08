import connect from '../db/dbconfig';
const logout = async (req, res) => {
    try {
        connect();
        res.clearCookie('token');
        return res.json({ message: 'Logged out successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default logout;

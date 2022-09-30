const getHome = (req, res) => {
    try { 
        res.status(200).render('index', { title: "Daniel's Recipe Book - Home"})
    } catch (e) {
        return res.status(400).json({ message: e.message})
    }
}

module.exports = {
    getHome
}
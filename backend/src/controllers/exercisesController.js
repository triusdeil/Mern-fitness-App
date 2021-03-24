import Card from '../models/Card'

export const findCards = async (req,res) => {
    try {
        const findCards = await Card.find()
        res.json(findCards)
    } catch (error) {
        console.log(error)
    }
}

export const createCard = async(req,res) =>{
    try {
        const newCard = new Card({title:req.body.title, description:req.body.description, img:req.body.img, leftColor:req.body.leftColor, rightColor:req.body.rightColor})
        newCard.save()
        res.status(200).json({message:"New Card is created"})
    } catch (error) {
        console.error(error)
    }
}

export const findCard = async (req,res) =>{
    try {
        const {id} = req.params
        const card = await Card.findById(id)
        res.json(card)
    } catch (error) {
        console.log(error)
    }
}
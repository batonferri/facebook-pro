import {SearchIcon} from "@heroicons/react/outline"
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"
import Contact from "./Contact"


const contacts = [
    {src:"https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name:"Layton Perkins"},
    {src:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", name:"Amber Mak"},
    {src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", name:"Teri Rivers"},
    {src:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", name:"Sahib Esparza"},
    {src:"https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", name:"Irving Torres"}
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {contacts.map(contact =>(
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        </div>
    )
}

export default Widgets

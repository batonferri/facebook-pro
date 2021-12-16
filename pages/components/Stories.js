import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Amber Mak",
        src: "https://images.pexels.com/photos/10153600/pexels-photo-10153600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
        name: "Layton Perkins",
        src: "https://images.pexels.com/photos/7007182/pexels-photo-7007182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Teri Rivers",
        src: "https://images.pexels.com/photos/8957083/pexels-photo-8957083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        name: "Sahib Esparza",
        src: "https://images.pexels.com/photos/10117700/pexels-photo-10117700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
        name: "Irving Torres",
        src: "https://images.pexels.com/photos/9556547/pexels-photo-9556547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        profile: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story)=>(
                <StoryCard key={story.src}  name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories

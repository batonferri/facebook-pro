import Image from "next/image"
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline"

function Post({post, name, image, profilePic, time}) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <img className="rounded-full" src={profilePic}  width={40} height={40} alt="" />
                    <div className="">
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">{time}</p>
                    </div>
                </div>
                <p className="pt-4">{post}</p>
            </div>
            {image && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={image} objectFit="cover" layout="fill"/>
                </div>
            )}
            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon">
                    <ThumbUpIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon">
                    <ChatAltIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                <div className="inputIcon">
                    <ShareIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post

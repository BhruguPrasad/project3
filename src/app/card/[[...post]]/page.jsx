import Card from "@/components/Card";
import Link from "next/link";
import MyImage from "../../../../public/image.png"
const page = ({ params }) => {
    console.log(params)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl">This is Card Page</h1>
            <Card heading="Card Page"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellat mollitia possimus, nisi et reiciendis, veritatis tempora, tenetur dolorem nostrum laboriosam odit pariatur! Rerum minus illum odit mollitia consequatur nesciunt optio ut maxime totam"
                thumbnail={MyImage}
            />
            <Link className=" text-xl hover:text-blue-600" href="/card/another">- Another Page</Link>
        </div>
    )
}

export default page;
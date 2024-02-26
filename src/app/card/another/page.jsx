import Card from "@/components/Card"
import MyImage from "../../../../public/nature.png"
import Image from "next/image"
const Another = () => {
  return (
    <div>
      <Image
      alt="Mountains"
      src={MyImage}
      placeholder="blur"
      className="opacity-30"
      quality={10}
      fill
    />
    <div>
      <Card  heading="Example Heading"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellat mollitia possimus, nisi et reiciendis, veritatis tempora, tenetur dolorem nostrum laboriosam odit pariatur! Rerum minus illum odit mollitia consequatur nesciunt optio ut maxime totam"
        />
    </div>
    </div>
  )
}

export default Another

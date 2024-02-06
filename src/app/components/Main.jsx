import Link from "next/link"
import MailIcons from "./mailIcons"





 export const data = [
 
  {
    id: 1,
    title: "Meeting Agenda",
    time: "01/11/2023",
    sender: "John Doe",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo vel enim lacinia sollicitudin. Nullam rhoncus justo at quam ultrices, vel accumsan nisl vehicula. Integer in ipsum auctor, luctus eros vitae, eleifend ex.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus tempor purus eu dolor euismod, vel commodo mauris gravida. Duis eget efficitur ante, vel suscipit lorem. Fusce aliquam lacus justo, et vehicula turpis bibendum et.",
      
    ]
  },
  {
    id: 2,
    title: "Project Update",
    time: "02/12/2023",
    sender: "Jane Smith",
    content: [
      "Nulla in ullamcorper nisl. Proin quis tortor libero. Duis laoreet lorem non justo viverra, nec laoreet ipsum aliquam. Fusce auctor purus nec odio fringilla, non lacinia velit convallis.",
      "Etiam fringilla mauris nec libero tempus, nec accumsan ligula accumsan. Mauris sed consectetur velit. Fusce et nunc rutrum, iaculis arcu sit amet, pharetra mauris. Nullam semper, metus in vehicula malesuada, dui eros venenatis ipsum, nec eleifend sem felis ac odio.",
      
    ]
  },
  {
    id: 3,
    title: "Reminder-Deadline Approaching",
    time: "03/15/2023",
    sender: "Alice Johnson",
    content: [
      "Morbi tempus, lacus quis pharetra blandit, elit ipsum convallis quam, nec fermentum ex lacus nec nisi. Vestibulum laoreet nisl a libero consequat, sit amet euismod risus eleifend.",
      "Cras sed tristique justo, vel fringilla purus. Sed nec lectus id lorem finibus dictum. Ut vel felis nec magna rhoncus lacinia. Sed ac nisl eget urna convallis feugiat a nec turpis.",
     
    ]
  },
  {
    id: 4,
    title: "Holiday Schedule",
    time: "04/20/2023",
    sender: "David Brown",
    content: [
      "Curabitur suscipit lobortis metus, eu malesuada lorem viverra vel. Quisque vehicula orci sed sapien accumsan, et dapibus sapien mattis. Maecenas sit amet lacus vitae felis semper dapibus.",
      "Pellentesque at quam nec purus laoreet viverra. Vivamus interdum ex a libero suscipit, vel pellentesque nunc ultrices. Ut condimentum bibendum sapien at dignissim. Integer efficitur ante vel justo elementum, eget laoreet orci placerat.",
      
    ]
  },
  {
    id: 5,
    title: "Product Launch Announcement",
    time: "05/25/2023",
    sender: "Emily White",
    content: [
      "Fusce at tellus auctor, convallis tortor ac, vehicula tortor. Integer feugiat augue eu ligula placerat condimentum. Vestibulum dapibus leo sit amet libero bibendum, eget vehicula quam dapibus.",
      "Phasellus eget sem a justo finibus aliquet. Donec venenatis dolor sed dui facilisis, id consectetur dui pellentesque. Duis in lorem a leo rutrum pharetra. Curabitur ac lectus eget risus efficitur lobortis.",
      
    ]
  },
]


export default function Main() {

  const fullData = data.map((datum) => (
    <section key={datum.id} className="py-3 border">
      <Link href={`/inbox/${datum.title.split(' ').join('-').toLowerCase()}`}className="flex space-x-4 items-center">
        <MailIcons />

      <h2 className="w-1/5">{datum.sender}</h2>

      <h2>{(datum.title +'- '+ datum.content[0]).length >= 40 ?
      (datum.title +'- '+ datum.content[0]).slice(0,60)+ '...' : 
      datum.title+datum.content[0]}</h2>
      </Link>
    </section>
  ))
  return (
    <div>
      {fullData}
      </div>
  )
}

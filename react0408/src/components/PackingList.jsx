import Items from "./Items"

export default function PackingList () {
  return (
    <>
      <section>
        <h1>여행 짐 리스트</h1>
        <ul>
          <Items name="여분 옷" isPacked={true} />
          <Items name="노트북" isPacked={false} />
          <Items name="컵라면" isPacked={true} />
        </ul>
      </section>
    </>
  )
}
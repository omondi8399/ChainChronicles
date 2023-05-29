export default function Post() {
    return(
        <div className="post">
        <div className="image">
        <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        <div className="texts">
        <h2>React Labs: What We've Been Working On – June 2022</h2>
        <p className="info">
          <a className="author">Rodgers Omondi</a>
          <time>2023-05-06 16:45</time>
        </p>
        <p className="summary">React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.</p>
        </div>
      </div>
    )
}
const Shimmer = () => {
  const shimmerArr = new Array(20);
  shimmerArr.fill(" ");
  return (
    <div className="body">
      {shimmerArr.map((e, index) => {
        return <div className="shimmer" key={index}></div>;
      })}
    </div>
  );
};

export default Shimmer;

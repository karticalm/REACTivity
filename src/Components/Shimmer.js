const Shimmer = () => {
  const shimmerArr = new Array(20);
  shimmerArr.fill(" ");
  return (
    <div className="flex flex-wrap">
      {shimmerArr.map((e, index) => {
        return (
          <div
            className="justify-between w-1/6 h-96 p-3 m-3 bg-gray-100 rounded-md"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Shimmer;

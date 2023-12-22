const useSort = (data, sortType) => {
  data.sort((a, b) => a - b);
};

export default useSort;

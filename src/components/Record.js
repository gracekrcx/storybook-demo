import PropTypes from "prop-types";

function Record({ month = false }) {
  const container = {
    border: "3px solid #c7c7c7",
    borderRadius: "15px",
    width: "250px",
    padding: "10px",
  };
  const itemStyle = {
    padding: "10px 0px",
    backgroundColor: "#fff",
    borderBottom: "2px solid #e1e1e1",
  };
  const firstRow = {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const row = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const monthStyle = {
    height: "35px",
    backgroundColor: "#dfdfdf",
    display: month ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={container}>
      <div style={monthStyle}>11月</div>
      <div style={itemStyle}>
        <div style={firstRow}>
          <span>投注日期</span>
          <span>2022/11/2</span>
        </div>
        <div style={row}>
          <span>總投注數量</span>
          <span>23</span>
        </div>
      </div>
      <div style={itemStyle}>
        <div style={firstRow}>
          <span>投注日期</span>
          <span>2022/11/5</span>
        </div>
        <div style={row}>
          <span>總投注數量</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
}

Record.propTypes = {
  month: PropTypes.bool,
};

export default Record;

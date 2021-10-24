const useConfirm = (message, onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function") {
    return
  }
  if(onCancel && typeof onCancel !== "function") {
    return
  }
  const confirmAction = () => {
    if(global.confirm(message)) {
      onConfirm();    
    } else {
      onCancel()
    }
  }
  return confirmAction
}

function App() {
  // 확인시 실행됨
  const del = () => console.log("del all things")
  // 취소시 실행됨
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Really?",del,abort)
  return (
    <div className="App">
      <button onClick={confirmDelete}>del all stuff</button>
    </div>
  );
}

export default App;

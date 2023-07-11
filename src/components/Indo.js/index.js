import StyleColor from './card.modules';
import Styleindo from './indo.modules';

const Indo = (props) => {
  const { indo } = props;

  // const colors = ['#06d6a0', '#ef476f', '#118ab2'];

  // Tentukan indeks warna berdasarkan properti tertentu dari "indo"
  // const colorIndex = indo.total % colors.length;
  return (
    <StyleColor className="card">
      <Styleindo className="conten">
        <div className="kotak">
          <h3 className="kotak__status">
            <a className="kotak__link" href={indo.detail}>
              {indo.status || indo.status}
            </a>
          </h3>
          <h2 className="kotak__jumlah">{indo.total || indo.total}</h2>
        </div>
      </Styleindo>
    </StyleColor>
  );
};
export default Indo;

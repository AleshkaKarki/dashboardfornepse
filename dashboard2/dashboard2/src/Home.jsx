import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'; // Import delete and edit icons from React Icons library

function Home() {
  return (
    <main className='main-container'>
      <button className="create-portfolio-btn">Create New Portfolio:</button>
      <div className='main-title'>
        <h3>Your Portfolios</h3>
      </div>
      <div className="portfolio-table-container">
        <table className="portfolio-table">
          <tbody>
            <tr>
              <td>
                <div>
                  Portfolio Name Here;
                  <span className="action-icons">
                    <AiOutlineDelete /> {/* Delete icon */}
                    <AiOutlineEdit /> {/* Edit icon */}
                  </span>
                </div>
                <div>
                  Portfolio Name Here;
                  <span className="action-icons">
                    <AiOutlineDelete /> {/* Delete icon */}
                    <AiOutlineEdit /> {/* Edit icon */}
                  </span>
                </div>
                <div>
                  Portfolio Name Here;
                  <span className="action-icons">
                    <AiOutlineDelete /> {/* Delete icon */}
                    <AiOutlineEdit /> {/* Edit icon */}
                  </span>
                </div>
                <div>
                  Portfolio Name Here;
                  <span className="action-icons">
                    <AiOutlineDelete /> {/* Delete icon */}
                    <AiOutlineEdit /> {/* Edit icon */}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Home;

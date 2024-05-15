// import { saveAs } from 'file-saver';

const RESUME_PDF_URL = 'https://drive.google.com/file/d/1eiUuLXJV09FJKoyLJYQ52TCLhTRn2YR1/view?usp=share_link'

function DownloadButton() {
    const downloadFileAtUrl=(url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <button 
        onClick={() => {downloadFileAtUrl(RESUME_PDF_URL)}}
        className="relative px-10 py-7 rounded-lg leading-none flex items-center border-none">
            Download Resume
        </button>
    );
}

export default DownloadButton;

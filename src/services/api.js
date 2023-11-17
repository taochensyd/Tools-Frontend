import axios from 'axios';

const getPrinterTonerLevels = async () => {
    try {
        const response = await axios('http://localhost:3015/printer/tonerlevel');
        return response.data;
    } catch (error) {
        console.error('Error fetching printer toner levels:', error);
        return [];
    }
};

export { getPrinterTonerLevels };

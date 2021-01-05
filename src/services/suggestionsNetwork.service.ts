import {KeyValueResult} from "../KeyValueResultVisitor";

export const fetchSuggestions = (result: KeyValueResult): Promise<string[]> => {
    if (!result) {
        return Promise.resolve([]);
    }
    if (result.type === 'KeyResult') {
        return Promise.resolve(
            ['Key1', 'Key2', 'Key3', 'Key4', 'Key5'].filter((key) => key.toLowerCase().includes(result.key.toLowerCase()))
        );
    }
    else {
        return Promise.resolve(
            ['Value1', 'Value2', 'Value3', 'Value4', 'Value5'].filter((key) => key.toLowerCase().includes(result.value.toLowerCase()))
        );
    }
};

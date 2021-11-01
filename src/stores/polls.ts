import { writable } from 'svelte/store';
import { supabase } from '../supabase';

export const polls = writable([]);

const fetchPolls = async () => {
    try {
        const result = await supabase.from('polls').select();
        console.log(result);
        if (result.status == 200) {
            console.log(result.data);
            polls.set(result.data);
        }
    } catch (error) {
        console.log("error in polls store");
        console.log(error)
    }
};

fetchPolls();


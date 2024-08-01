import { PayloadAction } from "@reduxjs/toolkit";
import { AppEvent } from "../../app/types/event";
import { Timestamp } from "firebase/firestore";
import { createGenericSlice, GenericState } from "../../app/store/genericSlice";


type State = GenericState<AppEvent[]> & { loading: boolean; error: any };


const initialState: State = {
    loading: false,
    data: [],
    error: null,
    status: 'finished'
};


export const eventSlice = createGenericSlice({
    name: 'events',
    initialState,
    reducers: {
        sucess: {
            reducer: (state, action: PayloadAction<AppEvent[]>) => {
                state.data = action.payload;
                state.status = 'finished';
            },
            prepare: (events: any) => {
                let eventArray: AppEvent[] = [];
                if (Array.isArray(events)) {
                    eventArray = events;
                } else {
                    eventArray.push(events);
                }
                const mapped = eventArray.map((e: any) => {
                    return {
                        ...e,
                        date: (e.date as Timestamp).toDate().toISOString() 
                    };
                });
                return { payload: mapped };
            }
        }
    }
});


export const actions = eventSlice.actions;
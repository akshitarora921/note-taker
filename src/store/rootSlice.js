import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    notes: JSON.parse(localStorage.getItem("notes")) || [
      {
        id: 1,
        title: "first Note",
        discription: "discription of first note",
        dateCreated: new Date("2021-01-08"),
      },
    ],
    selectedDate: new Date(),
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    editNote: (state, action) => {
      const elementsIndex = state.notes.findIndex(
        (element) => element.id === action.payload.id
      );
      var a = state.notes;
      a[elementsIndex] = action.payload;
      localStorage.setItem("notes", JSON.stringify(a));
    },
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    deleteANote: (state, action) => {
      const elementsIndex = state.notes.findIndex(
        (element) => element.id === action.payload
      );
      var a = state.notes;
      a.splice(elementsIndex, 1);
      state.notes = a;
      localStorage.setItem("notes", JSON.stringify(a));
    },
    search: (state, action) => {
      console.log(action.payload);
      var a = state.notes;
      console.log(state.notes);
      a.filter((note) => note.title.includes(action.payload));
      state.notes = a;
      localStorage.setItem("notes", JSON.stringify(a));
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  addNote,
  setDate,
  deleteANote,
  editNote,
  search,
} = rootSlice.actions;

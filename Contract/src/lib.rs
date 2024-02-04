
#![no_std]
use gstd::{msg,async_main, collections::HashMap , prelude::*,ActorId};
use io::*;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));


static mut STATE:Option<CustomStruct> = None;


static mut INIT:Option<InitStruct> = None;



// 2. Create the mutability function for your state.
fn state_mut() -> &'static mut CustomStruct {

    let state = unsafe {  STATE.as_mut()};

    unsafe { state.unwrap_unchecked() }

}

#[warn(dead_code)]
fn init_state_mut() -> &'static mut InitStruct {

    let initstruct = unsafe { INIT.as_mut()};

    unsafe { initstruct.unwrap_unchecked() }

}

// Create a public State
#[derive(Clone, Default)]
pub struct Estadoprincipal {
    pub proedu: String,
    pub dmatricula: u128,
    pub dnombre: String,
    pub dapellidom: String,
    pub dprogramae: String,
    pub dperfil: String,
    pub dnumerot: String,
    pub amatricula: u128,
    pub anombre: String,
    pub aapellidop: String,
    pub aapellidom: String,
    pub aprogramae: String,
    pub anumerot: String,
    pub acuatrimestre: String,
    pub aggrupo: String,
    pub cuatrimestre: String,
    pub alumno: String,
    pub matriculad: String,
    pub grupo: String, 
    pub materia: String,
}

// Create a implementation on State
impl recursos {
    async fn AddProedu(&mut self) {}
    #[allow(dead_code)]
    async fn AddDocentes(&mut self) {}
    #[allow(dead_code)]
    async fn AddAlumnos(&mut self) {}
    #[allow(dead_code)]
    async fn Addgrupos(&mut self) {}
    
}


// 3. Create the init() function of your contract.
#[no_mangle]
extern "C" fn init () {


    estructura.replies.entry(msg::source()).or_insert(EstadoPrincipal {
        proedu: msg::source(),
        dmatricula: msg::source(),
        dnombre: msg::source(),
        dapellidom: msg::source(),
        dapellidop: msg::source(),
        dprogramae: msg::source(),
        dperfil: msg::source(),
        dnumerot: msg::source(),
        amatricula: msg::source(),
        anombre: msg::source(),
        aapellidop: msg::source(),
        aapellidom: msg::source(),
        aprogramae: msg::source(),
        anumerot: msg::source(),
        acuatrimestre: msg::source(),
        aggrupo: msg::source(),
        cuatrimestre: msg::source(),
        alumno: msg::source(),
        matriculad: msg::source(),
        grupo: msg::source(),
        materia: msg::source(),
        
       });

}


// 4.Create the main() function of your contract.
#[async_main]
async fn main(){

        // We load the input message
        let action: Action = msg::load().expect("Could not load Action");

        // We receive an action from the user and update the state. Example:
        match action {
            Action::FirstAction => {

                // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state.
                currentstate.thirdfield
                .entry(msg::source())
                .and_modify(|number| *number = number.saturating_add(1))
                .or_insert(1);


                 // Generate your event.
                 let _ =msg::reply(Event::FirstEvent,0);


            }
            Action::SecondAction(input) => {


                 // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state with a String input
                currentstate.firstfield = input.to_string();

                 // Generate your event.
                let _ =  msg::reply(Event::SecondEvent,0);
               

            }
            Action::ThirdAction(input) => {
               
                // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state with a String input
                currentstate.secondfield = input;

                // Generate your event.
                let _ = msg::reply(Event::ThirdEvent,0);
            }

            // 
            Action::Fourthaction(_input) => {
               
                let _currentstate = state_mut();


                let _ =  msg::reply(Event::ThirdEvent,0);
            }

           
        };
    }

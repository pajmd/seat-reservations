/**
 * Main entry point to initialize require config
 * 
 * baseUrl: the root path to use for all module lookups.
 * paths: path mappings for module names not found directly under baseUrl.
 * 
 */

  require.config({
    baseUrl: "lib",
    paths: {
        "app": "../app"
    }
  });
  
  require(["app/seat_reservations"],function(seat_reservations){
	  seat_reservations();

  });
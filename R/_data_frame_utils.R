
############
# COLUMNS

data_frame__rename_column = function(data_frame, old_column_name, new_column_name) {
  if (!old_column_name %in% colnames(data_frame)) {
    print(data_frame)
    print(old_column_name)
    print(new_column_name)
    stop(paste0("Column name ", old_column_name, " not found in data frame"))
  }
  
  colnames(data_frame)[colnames(data_frame) == old_column_name] = new_column_name
  return(data_frame)
}


data_frame__remove_columns = function(data_frame, ...) {
  columns_to_remove = c(...)
  data_frame = data_frame[, !(names(data_frame) %in% columns_to_remove)]
  return(data_frame)
}


data_frame__choose_reorder_columns = function(data_frame, columns_to_choose) {
  if (!all(columns_to_choose %in% colnames(data_frame))) {
    print(data_frame)
    print(columns_to_choose)
    stop("Some columns not found in data frame")
  }
  
  data_frame = data_frame[, columns_to_choose]
  return(data_frame)
}


#########
# ROWS

data_frame__sort_rows_with_specific_values = function(
    data_frame,
    column_1,
    values_1 = NULL,
    column_2 = NULL,
    values_2 = NULL,
    column_3 = NULL,
    values_3 = NULL
) {

  factor_1 = factor(data_frame[[column_1]], levels = values_1)
  number_of_factors = 1
  
  if (!is.null(column_2) && !is.null(values_2)) {
    factor_2 = factor(data_frame[[column_2]], levels = values_2)
    number_of_factors = 2
  }
  
  if (!is.null(column_3) && !is.null(values_3)) {
    factor_3 = factor(data_frame[[column_3]], levels = values_3)
    number_of_factors = 3
  }
  
  if (number_of_factors == 3) {
    sorted_data_frame = data_frame[order(factor_1, factor_2, factor_3), ]
  }
  else if (number_of_factors == 2) {
    sorted_data_frame = data_frame[order(factor_1, factor_2), ]
  }
  else {
    sorted_data_frame = data_frame[order(factor_1), ]
  }
  
  return(sorted_data_frame)
}


data_frame__sort_rows_by_values = function(
    data_frame,
    column_name
) {
  if (!column_name %in% colnames(data_frame)) {
    print(data_frame)
    print(column_name)
    stop(paste0("Column name ", column_name, " not found in data frame"))
  }
  
  sorted_data_frame = data_frame[order(data_frame[[column_name]]), ]
  
  return(sorted_data_frame)
}


##############
# FILTERING

data_frame__filter = function(data_frame, column_name, values) {
  if (!column_name %in% colnames(data_frame)) {
    print(data_frame)
    print(column_name)
    stop(paste0("Column name ", column_name, " not found in data frame"))
  }
  
  data_frame = data_frame[data_frame[[column_name]] %in% values, ]
  return(data_frame)
}

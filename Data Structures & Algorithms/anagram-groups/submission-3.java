class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
         Map<String, List<String>> map = new HashMap<>();
        //each index to char array-
         for(String word : strs){
            char[] ch= word.toCharArray();
            //alphabetically sort
            Arrays.sort(ch);
            //put sorted into new list
            String sorted = new String(ch);


            if(!map.containsKey(sorted)){
                 map.put(sorted, new ArrayList<>());
            }
            map.get(sorted).add(word);
         }
          return new ArrayList<>(map.values());
    }
}

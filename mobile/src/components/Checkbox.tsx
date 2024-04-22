import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Animated, { RotateInUpLeft, ZoomOut } from "react-native-reanimated";

interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export default function Checkbox({ checked = false, title, ...rest }: CheckBoxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <Animated.View className="h-8 w-8 m-1 mr-3 bg-green-500 rounded-lg items-center justify-center"
        entering={RotateInUpLeft}
        exiting={ZoomOut}
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 m-1 mr-3 bg-zinc-800 rounded-lg" />
      )}

      <Text className="text-white text-base font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
